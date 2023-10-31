import { Request, Response } from "express";

export class WelcomeController {
  async handle(request: Request, response: Response) {
    response.json({ message: "Fullstack Challenge 🏅 - Space X API" });
  }
}