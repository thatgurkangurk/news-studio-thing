import { Players, TweenService } from "@rbxts/services";
import { SendNotificationEvent } from "shared/events";

const player = Players.LocalPlayer;
const PlayerGui = player.WaitForChild("PlayerGui") as PlayerGui;

while (!PlayerGui) {
	wait();
}

const boxTweenInfo = new TweenInfo(2, Enum.EasingStyle.Quad, Enum.EasingDirection.InOut, 0, true);
const textTweenInfo = new TweenInfo(0.3, Enum.EasingStyle.Linear, Enum.EasingDirection.InOut, 0, true);

const boxTweenProp = {
	Size: new UDim2(0, 400, 0, 50),
};

const textTweenProp = {
	TextTransparency: 0,
};

SendNotificationEvent.OnClientEvent.Connect((message: string) => {
	const NotificationGui = PlayerGui.FindFirstChild("NotificationGui") as ScreenGui;
	const Message = NotificationGui.FindFirstChild("Message") as TextLabel;
	print("got the event");

	if (!Message) return warn("there is no textlabel");

	Message.Text = message;
	Message.TextTransparency = 1;

	const boxTween = TweenService.Create(Message, boxTweenInfo, boxTweenProp);
	const textTween = TweenService.Create(Message, textTweenInfo, textTweenProp);

	boxTween.Play();

	wait(1.7);

	textTween.Play();

	wait(0.3);

	boxTween.Pause();
	textTween.Pause();

	wait(3);

	textTween.Play();
	boxTween.Play();
});
