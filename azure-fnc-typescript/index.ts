import { IContext } from './utils/IContext';

export default (context: IContext, req) => {
    if (req.query.name || (req.query.name || req.body.name)) {
        const name = (req.query.name || req.body.name);
        context.done(null, { 
            status: 200, 
            body: `Hello: ${name}`
        });
    } else {
        context.done(null, { status: 404, body: "nok" });
    }
};