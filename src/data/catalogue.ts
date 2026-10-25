// The workouts, the programs, and the choices of the start screen. The data is the one of My 7 Minute Workout v1
// (the book by Brett Klika, the animations from Barebone by Bumhan Yu).
import workoutsJson from './workouts.json';
import programsJson from './programs.json';
import bonusJson from './bonus-programs.json';

export type Direction = 'left' | 'right';
export type Target = 'full' | 'upper' | 'lower' | 'core';

// One exercise (or the rest between two of them)
export type Workout = {
  id: number;
  // the name of the animation file, and the key of the exercise
  woname: string;
  displayname: string;
  wodirection: Direction;
  // seconds
  duration: number;
  targetarea: string;
};

// A program: a routine of exercise ids, with a rest (id 0) between each one
export type Program = { id: number; target: Target; routine: number[] };

export const REST_ID = 0;
// when a routine names an exercise that is not there, this one is used instead (id 40 is shadowboxing)
export const FALLBACK_ID = 40;
export const REST_SECONDS = 10;

export const WORKOUTS: Workout[] = workoutsJson as Workout[];
export const PROGRAMS: Program[] = programsJson as Program[];
// The bonus routines use the exercises that are not in the book. They are only part of a session when the setting is on.
export const BONUS_PROGRAMS: Program[] = bonusJson as Program[];

export const TARGETS: Array<{ id: Target; label: string }> = [
  { id: 'full', label: 'Full body' },
  { id: 'upper', label: 'Upper body' },
  { id: 'lower', label: 'Lower body' },
  { id: 'core', label: 'Core' },
];

// The length of the session: how many programs are put together. One program lasts 6 min 30 s.
export const DURATIONS: Array<{ programs: number; label: string }> = [
  { programs: 1, label: '7 min' },
  { programs: 2, label: '14 min' },
  { programs: 3, label: '21 min' },
  { programs: 4, label: '28 min' },
];

export const workoutById = (id: number): Workout => WORKOUTS.find((w) => w.id === id) ?? WORKOUTS.find((w) => w.id === FALLBACK_ID)!;
