'use client';

import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { ArrowBack, Edit, Save } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { GRADE_COLORS } from '../constants';
import HoldPicker from "./HoldPicker";

export function Boulder({ id }: { id: string }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const editMode = searchParams.has('edit');
  const [boulder, setBoulder] = useState<Boulder>({
    _id: '',
    name: '',
    grade: "",
    holds: {}
  });

  useEffect(() => {
    const fetchBoulders = async () => {
      const { data: boulder } = await (await fetch(`http://localhost:7668/boulders/${id}`)).json() as { data: Boulder };
      setBoulder(boulder);
    };
    fetchBoulders();
  }, []);

  if (!boulder) {
    return (<>Whoops not a known boulder</>);
  }

  const handleSave = async () => {
    const body = JSON.stringify(boulder);
    const { data } = await (await fetch(
      `http://localhost:7668/boulders/${id}`,
      {
        method: 'PUT',
        body,
        headers: {
          "Content-Type": "application/json",
        }
      })).json();

    router.push(`/boulder/${boulder._id}`);
  }
  const handleEdit = () => router.push(`/boulder/${boulder._id}?edit`)
  const handleBack = () => router.push('/');
  return (<>
    <AppBar className={`${GRADE_COLORS[parseInt(boulder.grade)]} ${boulder.grade !== '5' ? 'text-white' : 'text-black'}`} position="static">
      <Toolbar variant="regular" className='justify-between'>
        <IconButton edge="start" color='inherit' onClick={handleBack}><ArrowBack /></IconButton>
        <Typography className="font-freshman" variant="h5" color="inherit" component="div">
          {`${boulder?.name}`}
        </Typography>
        {
          editMode ?
            <IconButton edge='end' color='inherit' onClick={handleSave}><Save /></IconButton> :
            <IconButton edge='end' color='inherit' onClick={handleEdit}><Edit /></IconButton>
        }
      </Toolbar>
    </AppBar>

    <HoldPicker boulder={boulder} setBoulder={setBoulder as Dispatch<SetStateAction<Boulder | NewBoulder>>} editMode={editMode} />
  </>);
}
// 540px from top to bottom of the non-kicker panel


