// components/common/DatePicker.jsx
'use client'

import * as React from 'react'
import TextField from '@mui/material/TextField'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker as MUIDatePicker } from '@mui/x-date-pickers/DatePicker'
import dayjs from 'dayjs'

export default function DatePicker({ date, setDate }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MUIDatePicker
        label="Tug‘ilgan sana"
        value={date}
        onChange={(newValue) => setDate(newValue)}
        format="DD.MM.YYYY"
        slotProps={{ textField: { fullWidth: true, size: 'small' } }}
      />
    </LocalizationProvider>
  )
}
