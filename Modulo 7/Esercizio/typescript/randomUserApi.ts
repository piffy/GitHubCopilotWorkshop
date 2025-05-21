import express from 'express';
import type { Request, Response } from 'express';
import bodyParser from 'body-parser';
import { Octokit } from 'octokit';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// /api/authCallback
app.get('/api/authCallback', (_req: Request, res: Response) => {
  res.status(200).send('Authentication successful, now you can close this window');
});

app.post('/', async (req: Request, res: Response) => {
  const githubToken = req.header('X-GitHub-Token');
  const payload = req.body;
  if (!githubToken || !payload || !Array.isArray(payload.messages)) {
    return res.status(400).json({ error: 'Missing GitHub token or payload/messages.' });
  }

  // Authenticate with GitHub using Octokit
  const octokit = new Octokit({ auth: githubToken });
  let user;
  try {
    const { data } = await octokit.rest.users.getAuthenticated();
    user = data;
  } catch (err) {
    return res.status(401).json({ error: 'Invalid GitHub token.' });
  }

  payload.messages.unshift(
    { role: 'system', content: `Start every response with the user's name, which is @${user.login}.` },
    { role: 'system', content: `You are a helpful assistant that replies to user messages as if tou were Blackbeard, the Pirate. Answer in Italian language` },
    { role: 'system', content: `If the user doesn't explicitly ask you to create a new user, do nothing; otherwise, generate a fake user with first name, last name, email, home address, phone number, nationality, date of birth, and username, responding with a bulleted list and using an informal tone.` }
  );

  // Forward the request to GitHub Copilot API
  const fetch = (...args: Parameters<typeof import('node-fetch')['default']>) => import('node-fetch').then(({default: fetch}) => fetch(...args));
  try {
    const body = JSON.stringify({ messages: payload.messages, stream: true });
    const copilotRes = await fetch('https://api.githubcopilot.com/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${githubToken}`
      },
      body: body
    });
    if (!copilotRes.ok) {
      return res.status(500).json({ error: 'Failed to get response from Copilot API.' });
    }
    res.setHeader('Content-Type', 'application/json');
    // @ts-ignore
    copilotRes.body.pipe(res);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error.' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
