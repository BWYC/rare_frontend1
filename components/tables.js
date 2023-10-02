import { Table, Row, Col, Tooltip, User, Text, Container, Spacer } from "@nextui-org/react";
import { StyledBadge } from "./StyledBadge";
import { IconButton } from "./IconButton";
import { EyeIcon } from "./EyeIcon";
import { EditIcon } from "./EditIcon";
import { DeleteIcon } from "./DeleteIcon";

export default function App() {
  const columns = [
    { name: "Top Collections", uid: "name" },
    { name: "Stats", uid: "stats" },
    { name: "", uid: "status" },
    { name: "ACTIONS", uid: "actions" },
  ];
  const users = [
    {
      id: 1,
      name: "Kepler",
      stats: "Rarity",
      vol: "0.0",
      status: "Minting",
      age: "29",
      avatar: "https://bafybeifdvhexcod4a47cnplz7klo2amb5uva44l5rggufercqa3bfea4ti.ipfs.nftstorage.link/ipfs/bafybeifdvhexcod4a47cnplz7klo2amb5uva44l5rggufercqa3bfea4ti/k%20(13).png",
      address: "0x0000..0000",
    },
    {
      id: 2,
      name: "MBAYC",
     stats: "Rarity",
      vol: "0.0",
      status: "Minting",
      age: "25",
      avatar: "https://i.seadn.io/gae/lHexKRMpw-aoSyB1WdFBff5yfANLReFxHzt1DOj_sg7mS14yARpuvYcUtsyyx-Nkpk6WTcUPFoG53VnLJezYi8hAs0OxNZwlw6Y-dmI?auto=format&dpr=1&w=384",
      address: "0x0000..0000",
    },
    {
      id: 3,
      name: "Crazy Girls",
      stats: "Rarity",
      vol: "0.0",
      status: "Complete",
      age: "22",
      avatar: "https://i.seadn.io/gae/IDQ-Sidqd0tA6kL8IXb-dQqim_NlUu2MWKu4SdXcbsBknKMObwB2r4CLBIY9rrVwlaaPVqS9Cz727FfYiZjjAq-4_eb9gBQUMVOw5A?auto=format&dpr=1&w=384",
      address: "0x0000..0000",
    },
    {
      id: 4,
      name: "BAYC",
    stats: "Rarity",
      vol: "0.0",
      status: "Upcoming",
      age: "28",
      avatar: "https://i.seadn.io/gae/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB?auto=format&dpr=1&w=384",
     address: "0x0000..0000",
    },
    {
      id: 5,
      name: "Azuki",
   stats: "Rarity",
      vol: "0.0",
      status: "Upcoming",
      age: "24",
      avatar: "https://i.seadn.io/gae/H8jOCJuQokNqGBpkBN5wk1oZwO7LM8bNnrHCaekV2nKjnCqw6UB5oaH8XyNeBDj6bA_n1mjejzhFQUP3O1NfjFLHr3FOaeHcTOOT?auto=format&dpr=1&w=384",
      address: "0x0000..0000",
    },
  ];
  const renderCell = (user, columnKey) => {
    const cellValue = user[columnKey];
    switch (columnKey) {
      case "name":
        return (

				<User squared src={user.avatar} name={cellValue} css={{ p: 5,
		}}>
            {user.address}
          </User>
        );
      case "stats":
        return (
          <Col>
            <Row>
              <Text b size={14} css={{ tt: "capitalize" }}>
                {cellValue}
              </Text>
            </Row>
            <Row>
              <Text b size={16} css={{ tt: "capitalize", color: "$accents7" }}>
                {user.vol}
              </Text>
            </Row>
          </Col>
        );
      case "status":
        return <StyledBadge type={user.status}>{cellValue}</StyledBadge>;

      case "actions":
        return (
          <Row justify="center" align="center">
            <Col css={{ d: "flex" }}>
              <Tooltip content="View collection">
                <IconButton onClick={() => console.log("View user", user.id)}>
                  <EyeIcon size={20} fill="#979797" />
                </IconButton>
              </Tooltip>
            </Col>
			<Spacer />
            <Col css={{ d: "flex" }}>
              <Tooltip
                content="Cart"
                color="error"
                onClick={() => console.log("Add to Cart", user.id)}
              >
                <IconButton>
                  <DeleteIcon size={20} fill="#FF0080" />
                </IconButton>
              </Tooltip>
            </Col>
          </Row>
        );
      default:
        return cellValue;
    }
  };
  return (
  <Container
  css={{
	  width: "100%"
	  
  }}
  >
    <Table
      aria-label="Example table with custom cells"
      css={{
        height: "auto",
        width: "100%",
      }}
      selectionMode="none"
    >
      <Table.Header columns={columns}>
        {(column) => (
          <Table.Column
            key={column.uid}
            hideHeader={column.uid === "actions"}
            align={column.uid === "actions" ? "center" : "start"}
          >
            {column.name}
          </Table.Column>
        )}
      </Table.Header>
      <Table.Body items={users}>
        {(item) => (
          <Table.Row>
            {(columnKey) => (
              <Table.Cell>{renderCell(item, columnKey)}</Table.Cell>
            )}
          </Table.Row>
        )}
      </Table.Body>
    </Table>
	</Container>
  );
}