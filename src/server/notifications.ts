import { StarterGui } from "@rbxts/services";
import { SendNotificationEvent } from "shared/events";

export function setupNotificationGUI() {
	const NotificationGui = new Instance("ScreenGui");
	NotificationGui.Name = "NotificationGui";
	NotificationGui.ZIndexBehavior = Enum.ZIndexBehavior.Sibling;
	NotificationGui.Parent = StarterGui;

	const Message = new Instance("TextLabel");
	Message.AnchorPoint = new Vector2(0.5, 0.5);
	Message.BackgroundColor3 = Color3.fromRGB(50, 50, 50);
	Message.BorderSizePixel = 0;
	Message.Font = Enum.Font.Ubuntu;
	Message.FontFace = new Font(
		"rbxasset://fonts/families/Ubuntu.json",
		Enum.FontWeight.Regular,
		Enum.FontStyle.Normal,
	);
	Message.LayoutOrder = 24;
	Message.Name = "Message";
	Message.Position = new UDim2(0.5, 0, 0.9, 0);
	Message.Size = new UDim2(0, 0, 0, 50);
	Message.Text = "notification";
	Message.TextColor3 = Color3.fromRGB(255, 255, 255);
	Message.TextSize = 25;
	Message.TextWrapped = true;
	Message.TextTransparency = 1;
	Message.Parent = NotificationGui;

	const UICorner = new Instance("UICorner");
	UICorner.CornerRadius = new UDim(0, 10);
	UICorner.Parent = Message;
}

export function sendNotificationToPlayer(player: Player, message: string) {
	SendNotificationEvent.FireClient(player, message);
	print("sent notification");
}

export function sendNotificationToAllPlayers(message: string) {
	SendNotificationEvent.FireAllClients(message);
}
