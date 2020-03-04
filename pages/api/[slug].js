const getTitleFromSlug = (slug) => {
  let title = '';
  slug.split('_').forEach(part => {
    title += part ? part.replace(part.charAt(0), part.charAt(0).toUpperCase()) : '';
    title += ' ';
  });

  return title.trim();
};

export default (req, res) => {

  const { slug } = req.query;

  const title = getTitleFromSlug(slug);

  const response = {
    id: slug,
    title,
    description: `Custom Description for ${title}. Repeats 100 times. ---|||||----`.repeat(100),
    author: 'Dummy Author'
  };

  res.json(response);
}
