// import nextJest from 'next/jest.js'

// const createJestConfig = nextJest({
//   dir: './',
// })

// const config = {
//   testEnvironment: "jsdom",
//   modulePaths: ['<rootDir>/src/'],
//   collectCoverage: true,
//   collectCoverageFrom: [
//     '**/*.{ts,tsx}',
//     '**/*.d.ts',
//     '!**/node_modules/**',
//     '!**/.next/**',
//     '!**/coverage/**',
//     '!**/jest.config.mjs',
//     '!**/next.config.mjs',
//     '!**/types/**',
//     '!**/views/**',
//     '!**/pages/api/**'
//   ],
// }

// export default createJestConfig(config)

import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  dir: './',
})

const config = {
  testEnvironment: "jsdom",
  modulePaths: ['<rootDir>/src/'],
  collectCoverage: true,
  collectCoverageFrom: [
    // 1. Fokuskan coverage hanya ke dalam folder src
    'src/**/*.{ts,tsx}',      
    
    // 2. PERBAIKAN: Gunakan tanda seru (!) untuk MENGABAIKAN file .d.ts
    '!**/*.d.ts',             
    
    // 3. PERBAIKAN: Sesuaikan dengan nama filemu yang pakai .ts
    '!**/next.config.ts',     
    '!**/jest.config.mjs',
    
    // 4. Mengabaikan file Next.js bawaan yang tidak perlu dites
    '!src/pages/_app.tsx',
    '!src/pages/_document.tsx',
    '!src/pages/404.tsx',
    
    // 5. Mengabaikan folder yang sudah kamu tentukan sebelumnya
    '!**/node_modules/**',
    '!**/.next/**',
    '!**/coverage/**',
    '!**/types/**',
    '!**/views/**',
    '!**/pages/api/**'
  ],
}

export default createJestConfig(config)