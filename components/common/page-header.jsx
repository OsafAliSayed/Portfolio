export default function PageHeaderSection({ props }) {
    return (
        <div className="mb-12">
          <h1 className="text-2xl font-bold text-white tracking-tighter mb-2">{props.title}</h1>
          <p className="text-neutral-500 text-base mb-6">
            {props.description}
          </p>
        </div>
    );
}