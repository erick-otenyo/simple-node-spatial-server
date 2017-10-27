import { version } from '../../package.json';
import { Router } from 'express';
import county from './county'


export default ({ config, db }) => {
	let api = Router();

	api.use('/county', county({ config, db }));
	
	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({ version });
	});

	return api;
}
