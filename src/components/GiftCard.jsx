

export default function GiftCard({url, title,}) {
  return (
    <div className="card">
        <img src={url} alt="" />
        <p>{title}</p>
    </div>
  )
}

