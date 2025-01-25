import { NextApiRequest, NextApiResponse } from "next";
import {
  login,
  register,
  forgotPassword,
  resetPassword,
  logout,
  getUser,
} from "../../lib/api-client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    method,
    query: { action },
  } = req;

  try {
    switch (method) {
      case "POST":
        // Handle POST actions
        if (action === "login") {
          const response = await login(req.body);
          res.setHeader(
            "Set-Cookie",
            `session=${response.data.token}; Path=/; HttpOnly;`
          );
          return res.status(200).json(response.data);
        }

        if (action === "register") {
          const response = await register(req.body);
          return res.status(201).json(response.data);
        }

        if (action === "forgot-password") {
          const response = await forgotPassword(req.body.email);
          return res.status(200).json(response.data);
        }

        if (action === "reset-password") {
          const response = await resetPassword(req.body);
          return res.status(200).json(response.data);
        }

        if (action === "logout") {
          await logout();
          res.setHeader("Set-Cookie", `session=; Path=/; HttpOnly; Max-Age=0`);
          return res.status(200).json({ message: "Logged out successfully" });
        }

        return res
          .status(400)
          .json({ message: "Invalid action for POST method" });

      case "GET":
        // Handle GET actions
        if (action === "get-user") {
          const user = await getUser();
          return res.status(200).json(user.data);
        }

        return res
          .status(400)
          .json({ message: "Invalid action for GET method" });

      default:
        return res.status(405).json({ message: "Method not allowed" });
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error(error);
    return res
      .status(error.response?.status || 500)
      .json(error.response?.data || { message: "Server error" });
  }
}
