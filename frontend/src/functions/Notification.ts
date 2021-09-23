import { notification } from "antd";

export const openNotificationWithIcon = (
	type: string,
	message: string,
	description: string
): void => {
	if (type === "success" || type === "error")
		notification[type]({ message: message, description: description });
	return;
};