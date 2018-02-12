package controllers

import (
	"github.com/revel/revel"
)

type App struct {
	*revel.Controller
}

func (c App) Index() revel.Result {
	text := "hello"
	return c.Render(text)
}

//Test2 何故か大文字でないと動かない
func (c App) Test2() revel.Result {
	type Result struct {
		Message string `json:"message"`
	}

	result := Result{
		Message: "hogehoge",
	}

	return c.RenderJSON(result)
}
