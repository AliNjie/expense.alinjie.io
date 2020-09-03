module.exports = {
  async redirects() {
    return [
      {
        source: "/expenses",
        destination: "/month-selection",
        permanent: false,
      },
    ];
  },
};
