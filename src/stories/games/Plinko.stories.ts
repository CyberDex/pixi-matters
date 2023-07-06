import { Engine, Runner } from 'matter-js';
import { RoundMatterBody } from '../../RoundMatterBody';
import { argTypes, getDefaultArgs } from '../utils/argTypes';
import { Container } from '@pixi/display';
import { SquareMatterBody } from '../../SquareMatterBody';
import { getRandomInRange, getRandomItem } from '../utils/random';

const args = {
};

type Args = typeof args;

class Story
{
    view = new Container();
    engine: Engine;
    ball: RoundMatterBody;
    props: Args;

    constructor(props: Args)
    {
        this.props = props;

        // create matterJS engine
        this.engine = Engine.create();

        // create hybrid pixiJS-matterJS body component
        this.ball = new RoundMatterBody(
            this.engine.world, // pass matterJS world as parameter
            {
                x: window.innerWidth / 2,
                y: -20,
                radius: 25,
                color: 'red',
            });

        const rowsCount = 7;
        const distX = 100;
        const distY = 70;
        const size = 15;

        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        const startY = centerY - ((distX * rowsCount) / 2);

        for (let y = 1; y < rowsCount + 1; y++)
        {
            const startX = centerX - ((distX * y) / 2);

            for (let x = 0; x < y + 1; x++)
            {
                this.addStaticDots(startX + (x * distX), startY + (y * distY), size);
            }
        }

        for (let y = 1; y < rowsCount + 1; y++)
        {
            const startX = centerX - ((distX * y) / 2);

            for (let x = 0; x < y + 1; x++)
            {
                this.addStaticDots(startX + (x * distX), startY + (y * distY), size);
            }
        }

        const bucketsStartX = centerX - ((distX * rowsCount) / 2);
        const bucketsY = startY + (rowsCount * distY) + 120;

        for (let x = 0; x < rowsCount + 1; x++)
        {
            this.addBucket(bucketsStartX + (x * distX), bucketsY);
        }

        const bottomLineY = bucketsY + 90;

        this.addBottomLine(centerX, bottomLineY, (distX * rowsCount) + 1, 20);

        // Run matterJS engine
        Runner.run(this.engine);

        this.addBall(window.innerWidth / 2, startY - 100);
    }

    private addStaticDots(x: number, y: number, radius: number)
    {
        const body = new RoundMatterBody(
            this.engine.world,
            {
                x,
                y,
                radius,
                color: 'white',
            },
            {
                isStatic: true,
            },
        );

        this.view.addChild(body);
    }

    private addBall(x: number, y: number)
    {
        const body = new RoundMatterBody(
            this.engine.world,
            {
                x: x + getRandomInRange(-10, 10),
                y,
                radius: 10,
                color: this.getRandomColor(),
            },
            {
                density: 1,
                restitution: 0.5,
            },
        );

        this.view.addChild(body);

        setTimeout(() => this.addBall(x, y), 1000);
    }

    private addBucket(x: number, y: number)
    {
        const left = new SquareMatterBody(
            this.engine.world,
            { x, y, width: 10, height: 200, color: 'white' },
            {
                isStatic: true,
            },
        );

        this.view.addChild(left);
    }

    private addBottomLine(x: number, y: number, width: number, height: number)
    {
        const left = new SquareMatterBody(
            this.engine.world,
            { x, y, width, height, color: 'white' },
            {
                isStatic: true,
            },
        );

        this.view.addChild(left);
    }

    private getRandomColor(): string
    {
        return getRandomItem(COLORS);
    }

    update()
    {
        if (!this.ball) return;

        if (this.ball.y > window.innerHeight)
        {
            this.ball.resetPosition(window.innerWidth / 2, -20);
        }
    }
}

export const Plinko = (params: any) => new Story(params);

export default {
    title: 'Games',
    argTypes: argTypes(args),
    args: getDefaultArgs(args)
};

const COLORS = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'brown', 'gray'];
