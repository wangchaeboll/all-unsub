const $ = (q) => {
  const els = document.querySelectorAll(q);
  if (els.length > 1) return els;
  if (els.length === 1) return els[0];
  return null;
};

 
