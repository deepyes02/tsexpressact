import { Express, Request, Response } from "express";
import express from "express";
import * as path from "path";

export class Server {
	private app: Express;

	constructor(app: Express) {
		this.app = app;

		this.app.use(express.static(path.resolve("./") + "/build/frontend"));

		let data = [{
			"name": "Deepesh",
			"age": "34",
			"hobby": "programming"
		}]

		this.app.get('/api', (req: Request, res: Response): void => {
			res.send(data);
		})

		this.app.get('*', (req: Request, res: Response): void => {
			res.sendFile(path.resolve('./') + '/build/frontend/index.html')
		})
	}

	public start(port: number): void {
		this.app.listen(port, () => console.log(`Listening to port ${port}`))
	}
}