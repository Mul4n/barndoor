'use client';

import React, { useState } from "react";
import { AppBar, Icon, IconButton, TextField, ToggleButton, ToggleButtonGroup, Toolbar, Typography } from "@mui/material";
import { ArrowBack, Save } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { GRADE_COLORS, } from '../constants';
import HoldPicker from "./HoldPicker";

export function NewBoulder() {
  const router = useRouter();
  const [newBoulder, setNewBoulder] = useState<NewBoulder>({
    name: '',
    grade: "",
    holds: {}
  })

  const canSave = newBoulder.name && newBoulder.grade && Object.keys(newBoulder.holds).length;
  const handleSave = async () => {
    const body = JSON.stringify(newBoulder);
    const { data: boulder } = await (await fetch(
      `http://localhost:7668/boulders/add`,
      {
        method: 'POST',
        body,
        headers: {
          "Content-Type": "application/json",
        }
      })).json();

    router.push(`/boulder/${boulder._id}`);
  }
  const handleBack = () => router.push('/');
  return (<>
    <AppBar position="static">
      <Toolbar variant="regular" className='justify-between'>
        <IconButton edge="start" color='inherit' onClick={handleBack}><ArrowBack /></IconButton>
        <Typography variant="h4" color="inherit" component="div">
          New Boulder
        </Typography>
        <IconButton disabled={!canSave} edge='end' color='inherit' onClick={handleSave}><Save /></IconButton>
      </Toolbar>
    </AppBar>
    <div className="flex gap-5 flex-col mb-5">
      <TextField onChange={(e) => setNewBoulder({ ...newBoulder, name: e.target.value })} id="boulder-name" label="Name" variant="standard" />
      <div className="flex  gap-5 flew-row align-middle">
        <Typography alignContent="center" variant="h6" component="div"> Grade: </Typography>
        <ToggleButtonGroup value={newBoulder.grade} exclusive onChange={(_, grade) => setNewBoulder({ ...newBoulder, grade })}>
          <ToggleButton value="0"><Icon><div className={`w-5 h-5 ${GRADE_COLORS[0]} rounded-full`} /></Icon></ToggleButton>
          <ToggleButton value="1"><div className={`w-5 h-5 ${GRADE_COLORS[1]} rounded-full`} /></ToggleButton>
          <ToggleButton value="2"><div className={`w-5 h-5 ${GRADE_COLORS[2]} rounded-full`} /></ToggleButton>
          <ToggleButton value="3"><div className={`w-5 h-5 ${GRADE_COLORS[3]} rounded-full`} /></ToggleButton>
          <ToggleButton value="4"><div className={`w-5 h-5 ${GRADE_COLORS[4]} rounded-full`} /></ToggleButton>
          <ToggleButton value="5"><div className={`w-5 h-5 ${GRADE_COLORS[5]} rounded-full border-2 border-black`} /></ToggleButton>
        </ToggleButtonGroup>
      </div>
    </div>
    <HoldPicker boulder={newBoulder} setBoulder={setNewBoulder} editMode={true} />
  </>);
}
// 540px from top to bottom of the non-kicker panel


