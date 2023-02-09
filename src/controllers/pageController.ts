import {Request, Response} from 'express'

export const home = (req: Request, res: Response) => {
    res.send('home controller');
};
export const dogs = (req: Request, res: Response) => {
    res.send('dts');
};
export const cats = (req: Request, res: Response) => {
  //res.send(page/page);
};
export const fishes = (req: Request, res: Response) => {
  //res.send(page/page);
};