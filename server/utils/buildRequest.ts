export const buildRequest = (req: any, key: any) => ({
  ...req,
  body: req.body[key],
})
