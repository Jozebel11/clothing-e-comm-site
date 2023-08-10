module.exports = {
    images: {
        domains: ["carouk.co.uk"],
    },
    experimental: {
        appDir: true

    },
    env: {
        stripe_public_key: process.env.STRIPE_PUBLIC_KEY,
    }
};