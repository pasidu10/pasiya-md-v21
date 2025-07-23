import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function AdminPanel() {
  const [news, setNews] = useState("");
  const [replyKeyword, setReplyKeyword] = useState("");
  const [replyMessage, setReplyMessage] = useState("");
  const [broadcast, setBroadcast] = useState("");

  const handlePostNews = () => {
    console.log("Posting News:", news);
  };

  const handleAddReply = () => {
    console.log("Adding Reply:", replyKeyword, replyMessage);
  };

  const handleBroadcast = () => {
    console.log("Broadcasting:", broadcast);
  };

  return (
    <main className="p-4 max-w-md mx-auto text-white">
      <h1 className="text-2xl font-bold text-center mb-4">POWER BUY Admin Panel</h1>
      <Tabs defaultValue="news">
        <TabsList className="grid grid-cols-3">
          <TabsTrigger value="news">News</TabsTrigger>
          <TabsTrigger value="reply">Auto Reply</TabsTrigger>
          <TabsTrigger value="broadcast">Broadcast</TabsTrigger>
        </TabsList>

        <TabsContent value="news">
          <Card className="bg-gray-900">
            <CardContent className="p-4">
              <h2 className="text-lg font-semibold mb-2">Post News</h2>
              <Input
                placeholder="Enter your news here..."
                value={news}
                onChange={(e) => setNews(e.target.value)}
              />
              <Button onClick={handlePostNews} className="mt-2 w-full">Post</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reply">
          <Card className="bg-gray-900">
            <CardContent className="p-4">
              <h2 className="text-lg font-semibold mb-2">Auto Reply</h2>
              <Input
                placeholder="Trigger word (e.g., hi)"
                value={replyKeyword}
                onChange={(e) => setReplyKeyword(e.target.value)}
              />
              <Input
                placeholder="Bot reply message"
                className="mt-2"
                value={replyMessage}
                onChange={(e) => setReplyMessage(e.target.value)}
              />
              <Button onClick={handleAddReply} className="mt-2 w-full">Add</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="broadcast">
          <Card className="bg-gray-900">
            <CardContent className="p-4">
              <h2 className="text-lg font-semibold mb-2">Broadcast Message</h2>
              <Input
                placeholder="Enter your message"
                value={broadcast}
                onChange={(e) => setBroadcast(e.target.value)}
              />
              <Button onClick={handleBroadcast} className="mt-2 w-full">Send</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  );
}
