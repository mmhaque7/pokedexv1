"use client"


import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardBody, Avatar } from "@nextui-org/react";
import { MoreVertical } from "lucide-react";

export default function pokemonCard(props) {
  const [pokemonName, setPokemonName] = useState<string>("");
  const [url, setUrl] = useState<string>("");
  const [pokemonIndex, setPokemonIndex] = useState<string>("0");
  const [imgUrl, setImgUrl] = useState("");
  const [imgName, setImgName] = useState<string>("");

  useEffect(() => {
    setPokemonName(props.pokemonName);
    setUrl(props.url);
    setPokemonIndex(props.url.split("/")[6]);
    setImgUrl(`https://img.pokemondb.net/sprites/bank/normal/${imgName}.png`);
    setImgName(props.imgName);
  }, [
    props.pokemonName,
    props.url,
    pokemonIndex,
    url,
    imgUrl,
    imgName,
    props.imgName,
  ]);

  return (
    <div>
      <Card className="max-w-[400px]">
        <CardHeader className="flex justify-between">
          <div className="flex gap-5">
            <Avatar
              isBordered
              radius="full"
              size="lg"
              src={imgUrl}
            />
            <div className="flex flex-col gap-1 items-start justify-center">
              <h4 className="text-small font-semibold leading-none text-default-600">
                {pokemonName}
              </h4>
              <h5 className="text-small tracking-tight text-default-400">
                {pokemonIndex}
              </h5>
            </div>
          </div>
          <MoreVertical className="text-default-400" />
        </CardHeader>
        <CardBody className="px-3 py-0 text-small text-default-400">
          <p>
            This is the description area of the card. You can add more details
            about the card's content here.
          </p>
        </CardBody>
      </Card>
    </div>
  );
}
