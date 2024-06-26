/*
 *  Next.js config file for try project.
 *  Created On 29 February 2024
 */

/**
 * @type {import('next').NextConfig}
 */
module.exports = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                pathname: '/vsnthdev/**',
            }
        ]
    }
}
