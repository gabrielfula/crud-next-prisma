const asyncTimeout = async () => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Enviado");
    }, 1000);
  });

  return promise;
};

export { asyncTimeout };
