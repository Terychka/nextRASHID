
import styles from './ui/Card.module.scss'
import { addProductToDataBase } from './addProductToDataBase';
export default async function InputCard() {
    const url = "https://652124aea4199548356cd977.mockapi.io/products";
    const response = await fetch(url,{
        cache: "no-cache",
        next: {tags: ["products"]},
    })

    return (
        <>
        <form action={addProductToDataBase} >
            <div>
                <label className={styles.labelhead}>Заголовок</label>
                <input name="products" type="text" className={styles.inputhead} />
            </div>
            <div className="mb-6">
                <label className={styles.labelhead}>Устройство</label>
                <input name="products" type="text" className={styles.inputdevice} />
            </div>
            <div>
                <button type="submit" className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      Отправить
                    </span>
                </button>
            </div>
        </form>

        </>
    )
}
