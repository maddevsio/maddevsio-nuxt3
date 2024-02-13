export const parseRequest = (req: any) => ({
  ...req,
  body: {
    ...JSON.parse(req.body.payload),
  },
})
