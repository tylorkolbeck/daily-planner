
## Description
As the user types the input is automatically saved to local storage.

As the day progresses the time blocks change color to indicate that 
a time block is in the past, present, or future.

## Demo 
[Demo](https://tylorkolbeck.github.io/daily-planner/)

![GitHub Logo](/assets/scheduler-demo.png)

## User Story

```
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```
GIVEN I am using a daily planner to create a schedule

WHEN I open the planner
THEN the current day is displayed at the top of the calendar

WHEN I scroll down
THEN I am presented with timeblocks for standard business hours

WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future

WHEN I click into a timeblock
THEN I can enter an event

WHEN I go to a day in the future or past
THEN the text for the time blocks for that day is dispalayed

WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage

WHEN I refresh the page
THEN the saved events persist
```