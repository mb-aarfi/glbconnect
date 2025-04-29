import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();
const SALT_ROUNDS = 10;

export const createUser = async (userData) => {
  // Hash the password
  const hashedPassword = await bcrypt.hash(userData.password, SALT_ROUNDS);
  
  return prisma.user.create({
    data: {
      ...userData,
      password: hashedPassword
    }
  });
};

export const findUserByEmail = async (email) => {
  return prisma.user.findUnique({
    where: { email }
  });
};

export const validatePassword = async (plainPassword, hashedPassword) => {
  return bcrypt.compare(plainPassword, hashedPassword);
};

export const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: '1d' });
};

export const getUserById = async (id) => {
  return prisma.user.findUnique({
    where: { id },
    select: {
      id: true,
      name: true,
      email: true,
      createdAt: true,
      updatedAt: true
      // Exclude password
    }
  });
};

export const getAllUsers = async () => {
  return prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      createdAt: true,
      updatedAt: true
      // Exclude password
    }
  });
};

export const searchUsersByEmail = async (searchQuery) => {
  return prisma.user.findMany({
    where: {
      OR: [
        {
          email: {
            contains: searchQuery,
            mode: 'insensitive'
          }
        },
        {
          name: {
            startsWith: searchQuery,
            mode: 'insensitive'
          }
        },
        {
          name: {
            contains: searchQuery,
            mode: 'insensitive'
          }
        }
      ]
    },
    select: {
      id: true,
      name: true,
      email: true,
      createdAt: true,
      updatedAt: true
      // Exclude password
    }
  });
}; 