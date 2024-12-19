import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';


interface IInfoStore {
    name: string;
    email: string;
    birthDate: string;
    startMenstruation: string;
    menstruatioDuration: number;
    cycleDuration: number;
    cycleIssues: string[];
    physycalEmotionalProblems: string[];
    periodColor: number;
    flow: string;
    medicine: number;
    weight: number;
    height: number;
    goal: number;

    setValue: (data: number | string | string[], key: string)=> void
    
}
const useProfileStore = create<IInfoStore>()(
    persist(
        (set) => ({
            name: '',
            email: '',
            birthDate: '',
            startMenstruation: '',
            menstruatioDuration: 0,
            cycleDuration: 0,
            cycleIssues: [],
            physycalEmotionalProblems: [],
            periodColor: 0,
            flow: '',
            medicine: 0,
            weight: 0,
            height: 0,
            goal: 0,

            setValue: (data, key) =>   set((state) => ({...state, [key]: data })),
        }),
        
        {
            name: 'profileInfo',
            storage: createJSONStorage(() => AsyncStorage),
        }
    )
);

export default useProfileStore;