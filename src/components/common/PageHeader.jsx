export default function PageHeader({ title, description }) {
  return (
    <div className="bg-primary-900 text-white py-16 lg:py-20">
      <div className="container-content">
        <h1 className="font-heading text-4xl lg:text-5xl font-bold mb-4">{title}</h1>
        {description && (
          <p className="text-primary-100 text-lg lg:text-xl max-w-2xl">{description}</p>
        )}
      </div>
    </div>
  )
}
