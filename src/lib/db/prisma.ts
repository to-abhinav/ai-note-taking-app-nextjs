import {PrismaClient} from '@prisma/client';

const prismaclientsingleton =()=>{
    return new PrismaClient();
}

type PrismaClientSingleton = ReturnType<typeof prismaclientsingleton>;


const globalForPrisma = globalThis as unknown as {prisma: PrismaClientSingleton | undefined};

const prisma = globalForPrisma.prisma ?? prismaclientsingleton();

export default prisma;

if(process.env.NODE_ENV !== 'production'){
    globalForPrisma.prisma = prisma;
} 

