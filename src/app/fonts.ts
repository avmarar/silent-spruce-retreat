import { Dancing_Script, Poppins, Raleway } from 'next/font/google';

const dancingscript = Dancing_Script({
    subsets: ['latin'],
    variable: '--font-dancingscript',
    weight: '600',
});

const poppins = Poppins({
    subsets: ['latin'],
    variable: '--font-poppins',
    weight: ['700', '400'],
});

const raleway = Raleway({
    subsets: ['latin'],
    variable: '--font-raleway',
    weight: ['700', '400'],
});

export { dancingscript, poppins, raleway };
