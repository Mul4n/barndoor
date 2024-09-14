
import { IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useBoulders, useBouldersDispatch } from '../reducers/BouldersContext';
import { Add, Delete, Edit } from '@mui/icons-material';
import { useRouter } from 'next/navigation';

export function BouldersList() {
  const boulders: Boulder[] = useBoulders();
  return (<>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Grade</TableCell>
            <TableCell align="right">Edit</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {boulders.map((boulder) => (
            <BoulderHeader boulder={boulder} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <IconButton><Add /></IconButton>
  </>);
}

function BoulderHeader({ boulder }: { boulder: Boulder }) {
  const { name, grade, id } = boulder;
  const dispatch = useBouldersDispatch();
  const router = useRouter();

  const handleEdit = () => router.push(`/boulder/${boulder.id}`)
  const handleDelete = () => dispatch({ type: 'deleted', boulder });

  return (
    <TableRow
      key={`boulder-${id}`}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell className='cursor-pointer hover:bg-slate-400 hover:transition-all' onClick={() => router.push(`/boulder/${id}`)} component="th" scope="boulder">
        {name}
      </TableCell>
      <TableCell align="right">{grade}</TableCell>
      <TableCell align="right"><IconButton onClick={handleEdit}><Edit /></IconButton></TableCell>
      <TableCell align="right"><IconButton onClick={handleDelete}><Delete /></IconButton></TableCell>
    </TableRow>
  );
}