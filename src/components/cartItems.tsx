import { Button, Stack } from "react-bootstrap"
import storeItems from '../data.json'
import { formatCurrency } from "../utils/formatCurrency"
type CartItemProps = {
  id: number
  quantity: number
}

export function CartItem({ id, quantity }: CartItemProps) {
 
  const item = storeItems.find(i => i.id === id)
  if (item == null) return null

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item.img_url}
        style={{ width: "20%", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {item.title}{" "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".65rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {formatCurrency(item.price)}
        </div>
      </div>
      <div> {formatCurrency(item.price * quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
       
      >
        &times;
      </Button>
    </Stack>
  )
}
