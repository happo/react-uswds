import React from 'react'

import { Calendar } from './Calendar'
import { FocusMode } from './DatePicker'
import { parseDateString } from './utils'

/*
// THIS STORY FOR INTERNAL DEVELOPMENT ONLY

export default {
  title: 'Components/Form controls/Date picker/Calendar',
  component: Calendar,
  argTypes: {
    handleSelectDate: { action: 'select date' },
    setStatuses: { action: 'set statuses' },
  },
}
*/

const defaultProps = {
  minDate: new Date('0000-01-01'),
  focusMode: FocusMode.None,
}

export const defaultCalendar = (argTypes): React.ReactElement => (
  <Calendar
    {...defaultProps}
    handleSelectDate={argTypes.handleSelectDate}
    setStatuses={argTypes.setStatuses}
  />
)

export const givenDate = (argTypes): React.ReactElement => (
  <Calendar
    {...defaultProps}
    handleSelectDate={argTypes.handleSelectDate}
    setStatuses={argTypes.setStatuses}
    date={new Date('July 4, 2019')}
  />
)

export const selectedDate = (argTypes): React.ReactElement => (
  <Calendar
    {...defaultProps}
    handleSelectDate={argTypes.handleSelectDate}
    setStatuses={argTypes.setStatuses}
    selectedDate={new Date('January 20, 2021')}
  />
)

export const minAndMax = (argTypes): React.ReactElement => (
  <Calendar
    {...defaultProps}
    handleSelectDate={argTypes.handleSelectDate}
    setStatuses={argTypes.setStatuses}
    date={new Date('January 15 2021')}
    minDate={parseDateString('2021-01-10')}
    maxDate={parseDateString('2021-01-20')}
  />
)

export const rangeDate = (argTypes): React.ReactElement => (
  <Calendar
    {...defaultProps}
    handleSelectDate={argTypes.handleSelectDate}
    setStatuses={argTypes.setStatuses}
    selectedDate={parseDateString('2021-01-20')}
    rangeDate={parseDateString('2021-01-08')}
  />
)
