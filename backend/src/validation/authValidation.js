const {z} = require("zod");

 const signupInput=z.object({
    email: z.string().email(),
    password: z.string(),
    name: z.string(),
})

 const signinInput = z.object({
    email: z.string().email(),
    password: z.string(),
});

module.exports= {signupInput, signinInput};