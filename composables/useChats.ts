import { ChatRoom } from "~/types/chat";

export const useChats = () => {
  const { $db, $user } = useNuxtApp();
  const chatRooms = ref<ChatRoom[]>([]);

  const getChatRooms = async (page = 1, limit = 10) => {
    const userChatRoomIds = (await $user.get<string[]>('chat-rooms').then()) ?? [];

    if (!userChatRoomIds.length) {
      return;
    }

    const tempChatRooms: ChatRoom[] = [];

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    for (let index = startIndex; index < endIndex; index++) {
      const roomId = userChatRoomIds[index];

      const room = await $db.get<ChatRoom>(`chat-rooms/${roomId}`).then();

      if (room) tempChatRooms.push(room);
    }

    chatRooms.value.push(...tempChatRooms);
  };

  const createNewChat = (userId: string) => {
    const roomId = `${$user.is?.pub}-${userId}`;
    $db.get<ChatRoom>(`chat-rooms/${roomId}`).put({
      name: roomId
    });
  };

  return {
    chatRooms,

    getChatRooms,
    createNewChat
  };
};
