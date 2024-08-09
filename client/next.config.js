module.exports = {
  async redirects() {
    return [
      // Basic redirect
      {
        source: "/",
        destination: "/en",
        permanent: true,
      },
    ];
  },
};
