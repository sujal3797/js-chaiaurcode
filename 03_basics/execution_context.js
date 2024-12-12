/*
GLOBAL EXECUTION CONTEXT
    when javascript begins executing, it creates a Global Execution Context on the script.
    the Execution Context has two phases: the Memory Phase and the Execution Phase
    1. Memory Phase (called Hoisting)
        variables are allocated memory and initialised to undefined.
        functions are stored as-is (their full definition, not undefined).
    2. Execution Phase
        the code is executed line by line.
        variables are assigned their actual values.
        function calls are executed.
FUNCTOIN EXECUTION CONTEXT
    when a function is called, Javascript creates a new Execution Context specifically for that function.
    just like the global execution context, the function context has - Memory & Execution phase 
*/