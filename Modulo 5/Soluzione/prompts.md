**ASK Mode:**

1. Analyze the code of this TaskManager. Highlight its strengths, identify areas for improvement, and suggest possible refactorings.
2. This TaskManager is designed to handle thousands of tasks concurrently. Evaluate its performance and suggest any optimizations.
3. What architectural patterns would you recommend to make this TaskManager scalable and suitable for an enterprise environment?
4. How would you modify the TaskManager to support multi-tenancy and collaborative features between users?
5. Perform a security-focused code review: are there any known vulnerabilities, lack of input sanitization, or best practices not followed?

**EDIT Mode:**

1. ADD TASK PRIORITY SYSTEM:
   * Create a TaskPriority enum (Low, Medium, High) under the Task class
   * Add a Priority property to the Task class
   * Implement a GetTasksByPriority method in the TaskManager
2. ADD INPUT VALIDATION:
   * Modify AddTask to validate input parameters
   * Ensure title is not null or empty
   * Limit the length of title and description
3. EXCEPTION HANDLING:
   * Wrap main methods in try-catch blocks
   * Implement custom logging to capture exceptions

**AGENT Mode:**
1. REPOSITORY PATTERN:
   * /fix Refactor the TaskManager to implement the Repository Pattern using Entity Framework Core. Keep the current API interface compatible.
2. UNIT TEST GENERATION:
   * /tests Generate a complete unit test suite for TaskManager using NUnit, FluentAssertions, and Moq to mock dependencies
3. REST API CONTROLLER:
   * /fix Create an ASP.NET Core REST API controller with full CRUD endpoints, input validation, error handling, and Swagger documentation
4. XML DOCUMENTATION:
   * /doc Generate XML documentation for all public classes and methods. Include usage examples where appropriate
