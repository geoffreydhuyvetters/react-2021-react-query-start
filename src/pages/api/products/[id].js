import tshirtData from '../../../data/tshirt.json';
import sweaterData from '../../../data/sweater.json';
import pantsData from '../../../data/pants.json';

const dataMap = {
  '1b14f826-c7df-4d84-a6c3-9c2b08240376': tshirtData,
  'be4b21e0-bd0a-4b7e-9e17-a8da4d003634': sweaterData,
  '0077395e-e898-462d-a4d6-04f02e787c8d': pantsData,
};

const product = (req, res) => {
  const data = dataMap[req?.query?.id];

  if (!data) {
    return res.status(404).send('');
  }

  return res.json(dataMap[req.query.id]);
};

export default product;
