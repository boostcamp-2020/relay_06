const getImage = async (id) => {
  //   const result = await axios.get(`/photo/${id}`);
  return { id: id, url: 'http://placeimg.com/640/480/any', tags: [] };
};

export { getImage };
