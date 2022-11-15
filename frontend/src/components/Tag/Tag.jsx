import './Tag.css';

function Tag({ logement }) {
  // props logement pour pas copié le code de UseParams etc qui se trouve sur la fiche-logement.
  const tag = logement.tags;
  const Tag_map = tag.map((e, index) => (
    <p className="tag__p" key={e}>{logement.tags[index]}</p>
  ));
  return <div className="tag">{Tag_map}</div>;
}

export default Tag;
