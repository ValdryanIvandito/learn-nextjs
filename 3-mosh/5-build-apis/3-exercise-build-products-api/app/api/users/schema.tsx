import { z } from "zod";

const schema = z.object({
  name: z.string().min(3),
  // another examples using zod to validation
  // email: z.string().email(),
  // age: z.number(),
});

export default schema;
