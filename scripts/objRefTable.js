const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Button,
		C3.Plugins.Text,
		C3.Plugins.Sprite,
		C3.Plugins.Touch,
		C3.Plugins.Button.Cnds.OnClicked,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Plugins.System.Exps.random,
		C3.Plugins.System.Exps.layoutwidth,
		C3.Plugins.System.Exps.layoutheight,
		C3.Plugins.Touch.Cnds.OnTapGestureObject,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.System.Cnds.CompareVar
	];
};
self.C3_JsPropNameTable = [
	{Button: 0},
	{Button2: 0},
	{Text: 0},
	{Sprite: 0},
	{Text2: 0},
	{Touch: 0},
	{Text3: 0},
	{SKOR: 0}
];

self.InstanceType = {
	Button: class extends self.IButtonInstance {},
	Button2: class extends self.IButtonInstance {},
	Text: class extends self.ITextInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Text2: class extends self.ITextInstance {},
	Touch: class extends self.IInstance {},
	Text3: class extends self.ITextInstance {}
}