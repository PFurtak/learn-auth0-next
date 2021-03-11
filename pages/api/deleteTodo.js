import { table, getMinifiedRecord } from './utils/Airtable';

export default async (req, res) => {
  const { id } = req.body;

  try {
    const deletedRecords = await table.destroy([id]);
    res.status(200).json(getMinifiedRecord(deletedRecords[0]));
  } catch (error) {
    res.status(500).json({ errorMsg: 'Something went wrong' });
  }
};
