function HelloWorld() {
  return (
    <div>
      <p>HelloWorld</p>
    </div>
  );
}

const app = <HelloWorld />;

// id='app'に<HelloWorld />を埋め込む（マウント）
ReactDom.render(
  app,
  document.getElementById("root")
)