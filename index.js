// pages/index.js
import Button from "../components/Button";
import Card from "../components/Card";

export default function Home() {
  return (
    <div className="p-8 space-y-4">
      <h1 className="text-3xl font-bold">Welcome to My Site</h1>
      <Card title="Card Title" description="This is a reusable card component." />
      <Button onClick={() => alert("Clicked!")}>Click Me</Button>
    </div>
  );
}

