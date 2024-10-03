
import { AppBar, Button, Dialog, DialogActions, DialogTitle, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Toolbar, Typography } from '@mui/material';
import { Add, Delete, Edit } from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { GRADE_COLORS } from '../constants';
import { BoulderType } from '../interfaces';

export function BouldersList() {
  const [boulders, setBoulders] = useState<BoulderType[]>([]);
  const [toDelete, setToDelete] = useState<BoulderType | null>(null);
  useEffect(() => {
    const fetchBoulders = async () => {
      const { data: boulders } = await (await fetch('http://localhost:7668/boulders')).json() as { data: BoulderType[] };
      setBoulders(boulders);
    };
    fetchBoulders();
  }, []);

  const router = useRouter();

  const onDelete = async (id: string) => {
    await (await fetch(
      `http://localhost:7668/boulders/${id}`,
      {
        method: 'DELETE',
        headers: {
          "Content-Type": "application/json",
        }
      })).json();
    const newboulders = boulders.filter(b => b._id !== id);
    setBoulders(newboulders);
  }

  const onAdd = () => {
    router.push('/boulder/new');
  }

  return (<>
    <AppBar position="static">
      <Toolbar variant="dense" className='justify-between'>
        <Typography className="font-freshman" variant="h6" color="inherit" component="div">
          BarnBoard
        </Typography>
        <IconButton color='inherit' onClick={onAdd}><Add /></IconButton>
      </Toolbar>
    </AppBar>
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableBody>
          {boulders.map((boulder) => (
            <BoulderHeader key={boulder._id} boulder={boulder} onDelete={setToDelete} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Dialog open={!!toDelete} onClose={() => setToDelete(null)}>
      <DialogTitle>Do you really want to delete &quot;{toDelete?.name}&quot; ?</DialogTitle>
      <DialogActions>
        <Button onClick={() => { onDelete((toDelete as BoulderType)._id); setToDelete(null); }}>Delete</Button>
        <Button onClick={() => { setToDelete(null); }}>Cancel</Button>
      </DialogActions>
    </Dialog>
  </>);
}

function BoulderHeader({ boulder, onDelete }: { boulder: BoulderType, onDelete: Dispatch<SetStateAction<BoulderType | null>> }) {
  const { name, grade, _id } = boulder;
  const router = useRouter();

  const handleEdit = () => router.push(`/boulder/${boulder._id}?edit`)
  const handleDelete = () => {
    onDelete(boulder)
  };

  return (
    <TableRow
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell className='cursor-pointer hover:bg-slate-400 hover:transition-all' onClick={() => router.push(`/boulder/${_id}`)} component="th" scope="boulder">
        {name}
      </TableCell>
      <TableCell align="center"><div className={`w-5 h-5 ${GRADE_COLORS[parseInt(grade)]} rounded-full ${grade !== '5' ? 'text-white' : 'text-black border-2 border-black'}`}>{parseInt(grade) + 1}</div></TableCell>
      <TableCell align="right">
        <IconButton onClick={handleEdit}><Edit /></IconButton>
        <IconButton onClick={handleDelete}><Delete /></IconButton>
      </TableCell>
    </TableRow>
  );
}